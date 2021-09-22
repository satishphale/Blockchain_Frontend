import React, { Component } from 'react'
import Transactions from './transactions'

    class List extends Component {
      
      state = {
        transactions: []
      }

      componentDidMount() {
        fetch('http://localhost:5000/pending_tx')
        .then(res => res.json())
        .then((data) => {
          this.setState({ transactions: data })
        })
        .catch(console.log)
      }

      render() {
        return (
          <Transactions transactions={this.state.transactions} />
        )
      }

    }

    export default List;  