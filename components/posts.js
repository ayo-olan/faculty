import React from 'react';
import _ from 'lodash';

import { Link } from 'react-router-dom';
import { Block } from './block';

var posts = require('../data/posts.json');

// Compute months and dates from strings.
posts = _.each(posts, (post) => {
	var parts = post.date.split(".");
	post.year = parseInt(parts[0]);
	post.month = parseInt(parts[1]);
});

// Sort the posts by date
posts = posts.sort((a, b) => {
	return (b.year * 12 + b.month) - (a.year * 12 + a.month);
});

// Find the tag frequency
var tags = {};
_.each(posts, (post) => {
	_.each(post.tags, (tag) => {
		if (!(tag in tags))
			tags[tag] = 1;
		else
			tags[tag]++;
	});
});

var sortedTags = _.keys(tags).sort(function(a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});

class Topic extends React.Component {
	
	constructor(props) {

		super(props);
		this.filter = this.filter.bind(this);
		
	}
	
	filter() {
		
		this.props.posts.filter(this.props.selected ? null : this.props.topic);
		
	}

	render() {
		return (
			<span className={"clickable topic" + (this.props.selected ? " selected" : "")} onClick={this.filter}>
				{this.props.topic}
			</span>
		);
	}
	
}

class Posts extends React.Component {

	constructor(props) {
		
		super(props);
    		
	    this.state = {filter: null};

	}

	filter(topic) {
		
		this.setState({filter: topic});
		
	}

	render() {

		/*
		
		Personal posts that probably don't belong here:
		
		https://medium.com/bits-and-behavior/a-better-fit-cf25ec180115			
		https://medium.com/bits-and-behavior/my-iphone-hates-you-599c39a9258f			
		https://medium.com/bits-and-behavior/trouble-is-twitching-6e7435451ad9
		https://medium.com/bits-and-behavior/in-idle-2d7aca79e10b
		https://medium.com/bits-and-behavior/draught-907693a0443a
		https://medium.com/bits-and-behavior/mr-god-c7694437dc56
		https://medium.com/bits-and-behavior/hit-and-miss-fd5985586851			
		https://medium.com/bits-and-behavior/cracker-5f2b8d66ac6a
		https://medium.com/bits-and-behavior/honk-cea345fb0d35		
		https://medium.com/bits-and-behavior/wake-59db3863e5c9
		https://medium.com/bits-and-behavior/three-hundred-ninety-two-creepy-crawly-bug-legs-2f6a641bf7c1
		https://medium.com/bits-and-behavior/a-still-pond-1d1effdfc9d6
		https://medium.com/bits-and-behavior/departure-7e4e02537064
		https://medium.com/bits-and-behavior/dying-9bb77ec1a6e3
		https://medium.com/bits-and-behavior/race-me-ecb52664f70e
		https://medium.com/bits-and-behavior/why-do-we-perceive-music-676fbfd8132e
		https://medium.com/bits-and-behavior/what-does-it-mean-to-communicate-an-idea-57c4d63dfd1a
		
		*/

		var rows = _.map(
			_.filter(posts, (post) => { 
				return this.state.filter === null || post.tags.includes(this.state.filter) 
			}),	
			(post, index) => { 
				
				var date = post.date.split(".");
				var year = date[0];
				var month = date[1];

				return (
				<Block
					key={"post-" + index}
					image={post.img === null ? null : this.props.app.getWebRoot() + "/images/posts/post-" + post.img + ".jpg"}
					alt={post.alt}
					link={post.url}
					header={post.title}
					content=<p><small>{ month + "/" + year }</small><br/>{_.map(post.tags, (tag, index) => { return <small key={index} className={"topic" + (this.state.filter === tag ? " selected" : "")}>{tag}</small> })}</p>
				/>
				);
				
			}
		);
		
		var tagFilters = _.map(sortedTags, (tag, index) => {
			return (
				<Topic topic={tag} key={"topic" + index} posts={this} selected={this.state.filter === tag} />
			);
		});

		return (
			<div>
				<div className="lead">
					I <a href="https://medium.com/@amyjko/">blog</a> on my lab's Medium publication, <a href="https://medium.com/bits-and-behavior">Bits and Behavior</a>.
				</div>
				
				<p>
					Choose a topic below to filter.
				</p>
	
				<p>
					{ tagFilters }
				</p>
	
				{ rows }
				
			</div>
		);
			
	}
}

export { Posts };