import React, { Component } from 'react';
import axios from 'axios';
import './home.css';

class home extends Component {
    state = {
        books : []
    }

    componentWillMount () {
        axios.get('http://localhost:9000/libcat')
        .then((response) => {
            this.setState({
               books : response.data.result 
            })           
           
        })
    }

    render() {
        let books = this.state.books.map((book) => {
            return (
                <tr key={book.id}>
                    <th scope="row">{book.id}</th>
                    <td>{book.book_title}</td>
                    <td>{book.writer}</td>
                    <td>{book.location}</td>
                    <td>{book.location}</td>
                    <td>
                        <input className="btn btn-info btn-sm mr-2" type="button" defaultValue="Edit" />
                        <input className="btn btn-danger btn-sm" type="button" defaultValue="Delete" />
                    </td>                                        
                </tr>
            )
                
            
        })
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="mt-5 mb-3">
                        <h3>Data Management</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Book title</th>
                                        <th scope="col">Writer</th>
                                        <th scope="col">Location</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Action</th>                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {books}
                                </tbody>
                            </table>                    
                        </div>
                    </div>                   
                </div>
            </div>
        );
    }
}

export default home;