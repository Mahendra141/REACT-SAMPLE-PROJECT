import React from "react";
import Movies from "./Movies/Movies";
import { Route } from "react-router-dom";

export function CustomeRouter() {
  return (
    <div>
      <Route path="/movies" component={Movies} />
      
    </div>
  );
}