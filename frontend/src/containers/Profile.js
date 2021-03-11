import React, { useState, useEffect, useRef } from "react";
import { API } from "aws-amplify";
import { Table, InputGroup, Button, FormControl } from "react-bootstrap";
import _ from "lodash";

import { onError } from "../libs/errorLib";
import "./Profile.css";
import LoaderButton from "../components/LoaderButton";


export default function Profile() {

  let data = [{
    name: "Tesla",
    symbol: "TSLA",
    bid: "The Moon",
  },
  {
    name: "Apple",
    symbol: "AAPL",
    bid: 123,
  },
  {
    name: "Microsoft",
    symbol: "MSFT",
    bid: 235,
  },
  {
    name: "PayPal",
    symbol: "PYPL",
    bid: 189,
  },]

  return (
    <div className="Profile">
      <div className="">
        <h1>Stonks</h1>
        <p className="">Welcome to your profile!</p>
      </div>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Symbol</th>
            <th>Bid</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return <tr>

            </tr>
          })}
        </tbody>
      </Table>
    </div>
  );
}