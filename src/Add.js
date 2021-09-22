import React from 'react';
class Add extends React.Component{
    constructor(){
        super();
        this.state={
            author:'',
            content:'',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        fetch('http://127.0.0.1:5000/new_transaction',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers:{
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response=>response.json())
        .then((data)=>console.log(data));

        this.setState({
            author:'',
            content:'',
            // contact:'',
            // address:''
        });
    }

    render(){
        return (
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <th>Author</th>
                        <td>
                            <input value={this.state.author} name="author" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Content</th>
                        <td>
                            <input value={this.state.content} name="content" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    {/* <tr>
                        <th>Contact</th>
                        <td>
                            <input value={this.state.contact} name="contact" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                            <input value={this.state.address} name="address" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>*/}
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr> 
                </tbody>
            </table>
        );
    }
}

export default Add;