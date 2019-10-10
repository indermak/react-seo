import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data';
import { Helmet } from "react-helmet";
export default class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        const blogId = props.match.params.id || null;
        this.state = {
            blog: '',
            blogId,
            loading: false,
            id: null
        };
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const blog = blogs.find(blog => blog.id === this.state.blogId);
        this.setState({ blog, loading: false })
    }

    render() {
        const { blog} = this.state;
        if(!blog){
            return null
        }
        return (
            <main role="main">
                <Helmet>
                    <title>React SEO | {blog.attributes.title}</title>
                    <meta name="description" content={blog.attributes.field_description} />
                </Helmet>
                {/*Banner */}
                <section className="aboutbanner blog-header blog-detail">
                </section>
                {/* Bajaj Capital Blog Details */}
                <section className="blog-details">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-9 order-0 order-lg-1 border-left">
                                <article className="blog text-justify ">
                                    <div className=" sec-heading">
                                        {blog.attributes.body}
                                    </div>
                                </article>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}