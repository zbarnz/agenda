import React from "react";
import styles from "../styles/Home.module.css";

class Home extends React.Component {
  static contextType = Store;

  render() {
    let value = this.context;

    console.log( value );

    return (
      <>
        <div className={styles.homeContainer}>
          <h1>{}</h1>
          <h1>Meet with a purpose.</h1>
          <p>
            The Finder is the default file manager and graphical user interface
            shell used on all Macintosh operating systems. Described in its
            "About" window as "The Macintosh Desktop Experience", it is
            responsible for the launching of other applications, and for the
            overall user management of files, disks, and network volumes.
          </p>
        </div>
      </>
    );
  };
}

export default Home;
