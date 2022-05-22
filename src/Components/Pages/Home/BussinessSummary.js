import React from "react";

const BussinessSummary = () => {
  return (
    <div className="flex justify-center items-center mt-16">
      <div class="stats stats-vertical lg:stats-horizontal shadow">
        <div class="stat">
          <div class="stat-title">Served Customer</div>
          <div class="stat-value">31K+</div>
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div class="stat">
          <div class="stat-title">Anual Revenue</div>
          <div class="stat-value">200M+</div>
          <div class="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div class="stat">
          <div class="stat-title">Reviews</div>
          <div class="stat-value">33K</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
        <div class="stat">
          <div class="stat-title">Tools</div>
          <div class="stat-value">50+</div>
          <div class="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default BussinessSummary;
