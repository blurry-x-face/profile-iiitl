import React from "react"
import { niharika } from "../../Data/FacultyData"
import "../../components/template.css"
import { ListGenerator } from "../../components/methods"
import Layout from "../../components/niharika"

const lists = [{ head: "Teachings: ", list: niharika.courses }]

class Course extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ListGenerator data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Course
