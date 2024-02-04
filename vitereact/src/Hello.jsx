function Hello(){

  let myName = 'Mrunali';
  let fullName = () => {
    return "Mrunali Kale";
  }
    return(
      <h3>
        Hello this is the future speaking.
        I am your master {fullName()}
      </h3>
    )
}

export default Hello;