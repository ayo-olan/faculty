import React from 'react';
import { Link } from 'react-router-dom';
import { ContactInfo } from './contact';

class Header extends React.Component {
	render() {
		
		var path = this.props.path || "";
		
		return (
			<div>

				<div className='row'>
		
					<div className="col-xs-5 col-sm-3 col-md-3">
						<img className='img-thumbnail' alt="Headshot of Amy J. Ko" src={this.props.app.getWebRoot() + "/images/headshots/mug-ajko.jpg"} />
					</div>
		
					<div className="col-xs-7 col-sm-9 col-md-9" style={{lineHeight: "1.15em"}}>
						<div className="lead" style={{marginBottom: 0}}>Amy J. Ko, Ph.D. <small><small><em><a href="https://www.mypronouns.org/she-her">she/her/hers</a></em></small></small></div>
						<small>
 							Associate Professor
							<br/><a href="https://ischool.uw.edu/academics/informatics">Informatics</a> Program Chair
							<br/><a href="http://ischool.uw.edu" target="_blank">The Information School</a>
							<br/><a href="http://cs.uw.edu" target="_blank">Computer Science &amp; Engineering (courtesy)</a>
							<br/><a href="http://www.washington.edu" target="_blank">University of Washington, Seattle</a>
							<br/><Link to="/cv">CV</Link>, <a href="http://faculty.uw.edu/ajko/promises">Commitments</a>
							<br/><strong><a href="https://twitter.com/search?q=%23BlackLivesMatter">#BlackLivesMatter</a></strong>
						</small>
					</div>
					
				</div>

				<div className="header">
			        <nav>
						<ul className="nav nav-pills">
							<li role="presentation" className={path === "/" ? "active" : ""}><Link to="/">Projects</Link></li>
							<li role="presentation" className={path.startsWith("/students") ? "active" : ""}><Link to="/students">Lab</Link></li>
							<li role="presentation" className={path.startsWith("/publications") ? "active" : ""}><Link to="/publications">Papers</Link></li>
							<li role="presentation" className={path.startsWith("/posts") ? "active" : ""}><Link to="/posts">Blog</Link></li>
							<li role="presentation" className={path.startsWith("/talks") ? "active" : ""}><Link to="/talks">Talks</Link></li>
							<li role="presentation" className={path.startsWith("/teaching") ? "active" : ""}><Link to="/teaching">Classes</Link></li>
							<li role="presentation" className={path.startsWith("/books") ? "active" : ""}><Link to="/books">Books</Link></li>
							<li role="presentation" className={path.startsWith("/impact") ? "active" : ""}><Link to="/impact">Impact</Link></li>
							<li role="presentation" className={path.startsWith("/advice") ? "active" : ""}><Link to="/advice">Tips</Link></li>
							<li role="presentation" className={path.startsWith("/bio") ? "active" : ""}><Link to="/bio">Bio</Link></li>
							<li role="presentation" className={path.startsWith("/funding") ? "active" : ""}><Link to="/funding">Funding</Link></li>
							<li role="presentation" className={path.startsWith("/contact") ? "active" : ""}><Link to="/contact">Contact</Link></li>
						</ul>
			        </nav>
			    </div>
			</div>
	    )
	}
}

export { Header };