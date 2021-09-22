import React from 'react'

    const Transactions = ({ transactions }) => {
      return (
        <div>
          <center><h1>Transaction List</h1></center>
          <table border="1">
                  <tr>
                    <th>Author</th>
                    <th>Content</th>
                    <th>Timestamp</th>
                  </tr>
          {transactions.map((transaction) => (
              <tr>
                <td>{transaction.author}</td>
                <td>{transaction.content}</td>
                <td>{transaction.timestamp}</td>
                </tr>
            
          ))}
          </table>
        </div>
      )
    };

export default Transactions;