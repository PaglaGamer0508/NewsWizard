import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
	const [articles, setArticles] = useState([])
	const [loading, setLoading] = useState(true)
	const [page, setPage] = useState(1)
	const [totalResults, setTotalResults] = useState(0)

	const capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const updateNews = async () => {
		props.setProgress(10);
		const url =
			`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3498f7c162d74768b06fe5ea682f5cd6&page=${page}&pageSize=${props.pageSize}`;
		setLoading(true);
		const response = await fetch(url);
		props.setProgress(30);
		const data = await response.json();
		setArticles(data.articles);
		setTotalResults(data.totalResults);
		setPage(1);
		setLoading(false);
		props.setProgress(100);
	}

	useEffect(() => {
		document.title = `NewsWizard - ${capitalize(props.category)}`;
		updateNews();
	}, [])

	const fetchMoreData = async () => {
		const url =
		`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3498f7c162d74768b06fe5ea682f5cd6&page=${page + 1}&pageSize=${props.pageSize}`;
		setPage(page + 1);
		const response = await fetch(url);
		const data = await response.json();
		setArticles(articles.concat(data.articles));
		setTotalResults(data.totalResults);
	};

	return (
		<>
			<h1 className="text-center" style={{margin: '6rem 0 2rem'}}>NewsWizard - Top  <span className="text-primary">{capitalize(props.category)}</span> Headlines</h1>
			{loading && <Loading />}
			<InfiniteScroll
				dataLength={articles.length}
				next={fetchMoreData}
				hasMore={articles.length < totalResults}
				loader={<Loading />}
			>
				<div className="container">
					<div className="row">
						{articles.map((element, pos) => (
							<div className="col-md-4" key={pos}>
								<NewsItem
									title={element.title ? element.title.slice(0, 80) + "..." : ""}
									description={element.description ? element.description.slice(0, 200) + "..." : ""}
									imageUrl={
										element.urlToImage
											? element.urlToImage
											: "https://community.atlassian.com/t5/image/serverpage/image-id/140484iEBCB14C98F263CBF?v=v2"
									}
									newsUrl={element.url}
									date={new Date(element.publishedAt).toGMTString()}
									author={element.author}
								/>
							</div>
						))}
					</div>
				</div>
			</InfiniteScroll>
		</>
	);
}

News.defaultProps = {
	country: 'us',
	pageSize: 9,
	category: 'general',
}

News.propTypes = {
	country: PropTypes.string,
	pageSize: PropTypes.number,
	category: PropTypes.string,
}

export default News;
