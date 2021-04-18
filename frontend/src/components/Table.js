import React, { useState, useRef, useEffect } from "react";
import { Table as BootstrapTable, InputGroup, Button, FormControl, Form } from "react-bootstrap";
import { API, Auth } from "aws-amplify";

import LoaderButton from "../components/LoaderButton";
import { onError } from "../libs/errorLib";

/**
 * tableData is the data to construct the table
 * getWatchlists is your call to make after you update anything in a watchlist to refresh the data.
 * Sample usage: watchlists.map(elem => <Table tableData={elem} getWatchlists={getWatchlists} />)
 */
export default function Table({ tableData, getWatchlists}) {

  const [privacy, setPrivacy] = useState(tableData.privacy.charAt(0) + tableData.privacy.toLowerCase().slice(1));
  const formRef = useRef(null);

  const [actualUserId, setActualUserId] = useState("");

  useEffect(() => {
    Auth.currentUserInfo().then(res => setActualUserId(res.id));
  }, [actualUserId])

  const isUserTable = actualUserId === tableData.userId;

  const handleTableChange = (event) => {

  }

  const addSymbol = (symbol, watchlist) => {

  }

  const removeSymbol = (symbol, watchlist) => {

  }

  const deleteWatchlist = (watchlist) => {

  }

  return (
    <React.Fragment key={tableData.watchlistId}>
      <h2>{tableData.watchlistId}</h2>
      <BootstrapTable striped bordered hover>
        <thead>
          <tr>
            <th>Symbol</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </BootstrapTable>
    </React.Fragment>
  )
}