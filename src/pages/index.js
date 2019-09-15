import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <table>
        <caption>{data.timetables.WANDSWORTH_RIVERSIDE_QUARTER_PIER_TO_BLACKFRIARS_PIER.from} to {data.timetables.WANDSWORTH_RIVERSIDE_QUARTER_PIER_TO_BLACKFRIARS_PIER.to} </caption>
        <thead>
          <tr>
            <th>Departure time</th>
            <th>Arrival time</th>
          </tr>
        </thead>
        <tbody>
        {data.timetables.WANDSWORTH_RIVERSIDE_QUARTER_PIER_TO_BLACKFRIARS_PIER.sailings.map(({ departureTime, arrivalTime }, index) => (
          <tr key={index}>
            <td>{departureTime}</td>
            <td>{arrivalTime}</td>
          </tr>
        ))}
        </tbody>
      </table>
      <table>
      <caption>{data.timetables.BLACKFRIARS_PIER_TO_WANDSWORTH_RIVERSIDE_QUARTER_PIER.from} to {data.timetables.WANDSWORTH_RIVERSIDE_QUARTER_PIER_TO_BLACKFRIARS_PIER.from}</caption>
        <thead>
          <tr>
            <th>Departure time</th>
            <th>Arrival time</th>
          </tr>
        </thead>
        <tbody>
        {data.timetables.BLACKFRIARS_PIER_TO_WANDSWORTH_RIVERSIDE_QUARTER_PIER.sailings.map(({ departureTime, arrivalTime }, index) => (
          <tr key={index}>
            <td>{departureTime}</td>
            <td>{arrivalTime}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </Layout>
  )
}

export const query = graphql`
{
  timetables {
    WANDSWORTH_RIVERSIDE_QUARTER_PIER_TO_BLACKFRIARS_PIER: routing(from: WANDSWORTH_RIVERSIDE_QUARTER_PIER, to: BLACKFRIARS_PIER) {
      from
      to
      sailings {
        departureTime
        arrivalTime
      }
    }
    BLACKFRIARS_PIER_TO_WANDSWORTH_RIVERSIDE_QUARTER_PIER: routing(from: BLACKFRIARS_PIER, to: WANDSWORTH_RIVERSIDE_QUARTER_PIER) {
      from
      to
      sailings {
        departureTime
        arrivalTime
      }
    }
  }
}
`
