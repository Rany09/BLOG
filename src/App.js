import React from 'react';
import TopBar from './components/TopBar';
import BlogPost from './components/BlogPost';
import './App.css';

function App() {
    return (
        <div className="App">
            <TopBar />
            <div className="blog-posts">
                <BlogPost 
                    title="Blog Post Title 1" 
                    author="RANDEEP SINGH" 
                    date="May 31, 2024" 
                    image="img1.jpg">
                    This is the body of the first blog post. It contains some interesting content.
                </BlogPost>
                <BlogPost 
                    title="Blog Post Title 2" 
                    author="JASHANPREET SINGH" 
                    date="May 30, 2024" 
                    image="IMG2.jpg">
                    This is the body of the second blog post. It contains some interesting content.
                </BlogPost>
            </div>
        </div>
    );
}

export default App;