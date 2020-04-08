import React from 'react';

function Examples() {
    // dynamic styling
    const styles = {
        padding: "10px"
    }
    if (10 > 20) {
        styles.backgroundColor = "#4b5644"
    } else {
        styles.backgroundColor = "#f2bf14"
        styles.margin = 10; // default is px else "10px"
        styles.borderRadius = 15;
    }
    // inlinde styling
    // must replace dashes not-cammel-case with cammelCase
    return (
        <div className="example_container" style={styles}>

            <h1 style={{ color: "#b79116", textAlign: "center" }}>Computer Science Student</h1>
        </div >
    );
}

export default Examples;
