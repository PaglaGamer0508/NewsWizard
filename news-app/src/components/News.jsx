import React, { Component } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

class News extends Component {
	static defaultProps = {
		country: 'us',
		pageSize: 9,
		category: 'general',
	}

	static propTypes = {
		country: PropTypes.string,
		pageSize: PropTypes.number,
		category: PropTypes.string,
	}
	capitalize = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	constructor(props) {
		super(props);
		this.state = {
			articles: [],
			loading: true,
			page: 1,
		};
		document.title = `NewsWizard - ${this.capitalize(this.props.category)}`;
	}

	async updateNews() {
		this.props.setProgress(10);
		const url =
			`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3498f7c162d74768b06fe5ea682f5cd6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		this.setState({ loading: true });
		const response = await fetch(url);
		this.props.setProgress(30);
		const data = await response.json();
		this.setState({
			articles: data.articles,
			totalArticles: data.totalResults,
			totalResults: 0
		});
		this.props.setProgress(100);
	}

	async componentDidMount() {
		this.updateNews();
	}

	// handlePreviousClick = async () => {
	// 	this.setState({ page: this.state.page - 1, loading: true });
	// 	this.updateNews();
	// };

	// handleNextClick = async () => {
	// 	this.setState({ page: this.state.page + 1, loading: true });
	// 	this.updateNews();
	// };

	fetchMoreData = async () => {
		this.setState({ page: this.state.page + 1 });
		const url =
			// `https://newsapi.org/v2/everything?q=apple&&apiKey=3498f7c162d74768b06fe5ea682f5cd6&page=${this.state.page}&pageSize=${this.props.pageSize}`
			`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3498f7c162d74768b06fe5ea682f5cd6&page=${this.state.page}&pageSize=${this.props.pageSize}`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({
			articles: this.state.articles.concat(data.articles),
			totalArticles: data.totalResults
		});
	};

	render() {
		const { articles, loading } = this.state;

		return (
			<>
				<h1 className="text-center my-3">NewsWizard - Top  <span className="text-primary">{this.capitalize(this.props.category)}</span> Headlines</h1>
				{/* {this.state.loading && <Loading />} */}

				<InfiniteScroll
					dataLength={this.state.articles.length}
					next={this.fetchMoreData}
					hasMore={this.state.articles.length < this.state.totalArticles}
					loader={<Loading />}
				>
					<div className="container">
						<div className="row">
							{this.state.articles.map((element, pos) => (
								<div className="col-md-4" key={pos}>
									<NewsItem
										title={element.title ? element.title.slice(0, 60) + "..." : ""}
										description={element.description ? element.description.slice(0, 100) + "..." : ""}
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

				{/* <div className="container d-flex justify-content-between">
						<button disabled={this.state.page <= 1} type="button" className="btn btn-primary mx-2 my-2" onClick={this.handlePreviousClick}>&larr; Previous</button>
						<button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-primary mx-2 my-2" onClick={this.handleNextClick}>Next &rarr;</button>
					</div> */}

			</>
		);
	}
}

export default News;
