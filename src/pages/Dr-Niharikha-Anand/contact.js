import React from "react"
import { niharika } from "../../Data/FacultyData"
import "../../components/template.css"
import { ParaList } from "../../components/methods"
import Layout from "../../components/niharika"

const lists = [{ head: "Contact", list: niharika.contact }]

class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <div className="faculty-interest">
          {lists.map((v, i) => (
            <ParaList data={v} key={i} />
          ))}
        </div>
      </Layout>
    )
  }
}
export default Contact
