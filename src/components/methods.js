import React from "react"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const NAVRender = props => {
  let list = props.data.map((val, i) => {
    return (
      /*  <Link activeStyle={{background: "#363636"}} to={val.link} key={i} className="faculty-nav-item">
        {val.value}
      </Link> */
      <AniLink
        activeStyle={{ background: "#363636" }}
        /* swipe
        direction="left" */
        fade
        key={i}
        to={val.link}
      >
        {val.value}
      </AniLink>
    )
  })
  const openNav = () => {
    document.getElementById("faculty-alt-nav").style.display = "flex"
    document.getElementById("alt-ham-hid").style.display = "block"
    document.getElementById("alt-ham-show").style.display = "none"
    return
  }
  const closeNav = () => {
    document.getElementById("faculty-alt-nav").style.display = "none"
    document.getElementById("alt-ham-hid").style.display = "none"
    document.getElementById("alt-ham-show").style.display = "block"
    return
  }
  return (
    <div className="">
      {" "}
      <div className="faculty-nav-inner">{list}</div>
      <div className="faculty-hamburger">
        <i
          className="fas fa-bars"
          id="alt-ham-show"
          onClick={() => openNav()}
        />
        <i
          className="fas fa-bars"
          id="alt-ham-hid"
          onClick={() => closeNav()}
        />
      </div>
      <div className="faculty-alt-nav-inner" id="faculty-alt-nav">
        {props.data.map((val, i) => {
          return (
            <AniLink
              activeStyle={{ background: "#363636" }}
              to={val.link}
              key={i}
              fade
              className="faculty-nav-item"
              //   onClick={() => closeNav()}
            >
              {val.value}
            </AniLink>
          )
        })}
      </div>
    </div>
  )
}
const AboveNav = props => {
  return (
    <div className="faculty-above-nav">
      <div className="faculty-above-nav-inner">
        <div className="above-nav-section-1">
          <div>
            <h2 className="faculty-above-nav-head-name">{props.data.name}</h2>
            <p className="faculty-above-nav-head-dept faculty-above-nav-item">
              Department of Information Technology
            </p>
            <p className="faculty-above-nav-head-institute faculty-above-nav-item">
              Indian Institute of Information Technology, Lucknow,UP,India
            </p>
          </div>
        </div>
        <div className="above-nav-section-2">
          <img src={props.data.photo} alt="img" />
        </div>
      </div>
    </div>
  )
}
const ListGenerator = props => {
  let list = props.data.list.map((val, i) => <li key={i}>{val}</li>)
  return (
    <div className="faculty-interest-section-1">
      {props.data.head === "" ? (
        ""
      ) : (
        <h2 className="faculty-interest-head faculty-section-head">
          {props.data.head}
        </h2>
      )}
      <div className="faculty-interest-list">
        <ul>{list}</ul>
      </div>
    </div>
  )
}
class Methods {
  ListGenerator = props => {
    let list = props.data.list.map((val, i) => <li key={i}>{val}</li>)
    return (
      <div className="faculty-interest-section-1">
        <h2 className="faculty-interest-head faculty-section-head">
          {props.data.head}
        </h2>
        <div className="faculty-interest-list">
          <ul>{list}</ul>
        </div>
      </div>
    )
  }
  ArrayOfObjects = props => {
    let list = props.data.list.map((val, i) => {
      return (
        <li className="faculty-award-inner">
          {val.head === "" ? (
            ""
          ) : (
            <h2 className="faculty-award-head" key={i}>
              {val.head}
            </h2>
          )}
          <p className="faculty-award-detail" key={i}>
            {val.detail}
          </p>
        </li>
      )
    })
    return (
      <div className={props.other.className}>
        <h2 className="faculty-section-head">{props.other.head}</h2>
        <ul>{list}</ul>
      </div>
    )
  }
}
const ArrayOfObjects = props => {
  let list = props.data.list.map((val, i) => {
    return (
      <li className="faculty-award-inner">
        {val.head === "" ? (
          ""
        ) : (
          <h2 className="faculty-award-head" key={i}>
            {val.head}
          </h2>
        )}
        <div className="faculty-award-detail" key={i}>
          {val.detail}
        </div>
      </li>
    )
  })
  return (
    <div className={props.other.className}>
      <h2 className="faculty-section-head">{props.other.head}</h2>
      <ul>{list}</ul>
    </div>
  )
}
const ArrayOfObjectsList = props => {
  let list = props.data.list.map((val, i) => {
    return (
      <p className="faculty-award-inner">
        {val.head === "" ? (
          ""
        ) : (
          <h2 className="faculty-award-head" key={i}>
            {val.head}
          </h2>
        )}
        <ul className="faculty-award-detail" key={i}>
          {val.list.map((v, i) => (
            <li key={i}>{v}</li>
          ))}
        </ul>
      </p>
    )
  })
  return (
    <div className={props.other.className}>
      <h2 className="faculty-section-head">{props.other.head}</h2>
      <ul>{list}</ul>
    </div>
  )
}
const ParaList = props => {
  let list = props.data.list.map((val, i) => <p key={i}>{val}</p>)
  return (
    <div className="faculty-interest-section-1">
      {props.data.head === "" ? (
        ""
      ) : (
        <h2 className="faculty-interest-head faculty-section-head">
          {props.data.head}
        </h2>
      )}
      <div className="faculty-interest-list">{list}</div>
    </div>
  )
}
export {
  Methods,
  NAVRender,
  AboveNav,
  ListGenerator,
  ParaList,
  ArrayOfObjects,
  ArrayOfObjectsList,
}
