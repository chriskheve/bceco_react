import React from "react";
import {
  MixedWidget1,
  MixedWidget14,
  StatsWidget11,
  StatsWidget12,
  ListsWidget1,
  AdvanceTablesWidget2,
  AdvanceTablesWidget4,
  ListsWidget3,
  ListsWidget4,
  ListsWidget8,
} from "../widgets";
export function Demo1Dashboard() {
  return (
    <>
      <div className="row">
        {/* STATS */}
        <div className="col-lg-6 col-xxl-4">
          <MixedWidget1 className="card-stretch gutter-b" />
        </div>
        {/* REVENU CREDIT */}
        <div className="col-lg-6 col-xxl-4">
          <StatsWidget11
            className="card-stretch card-stretch-half gutter-b"
            symbolShape="circle"
            baseColor="success"
          />
          <StatsWidget12 className="card-stretch card-stretch-half gutter-b" />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <AdvanceTablesWidget4 className="card-stretch gutter-b" />
        </div>
      </div>
    </>
  );
}
