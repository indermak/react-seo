import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data';
import { Helmet } from 'react-helmet';

const renderBlogs = () => {
    return blogs.map((item) => {
        return (
            <div>
                Title: {item.attributes.title}
                <div>
                    id: {item.id}
                </div>
                <div>
                    <Link to={`/detail/${item.id}`}>go</Link>
                </div>
            </div>
        )
    })
}
export default () => (<div>hello from detail
    <div>
        <Helmet>
            <title>Dashboard - My Title</title>
        </Helmet>
        {renderBlogs()}
    </div>
</div>)