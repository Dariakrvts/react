const Input = ({handleChange, value, error, type}) => {
 return (
  <div>
    {value.error && <span>{value.error}</span>}
    
     <input 
      type= "text"
      onChange={this.props.handleChange} 
      value={this.prips.value}
      />
  </div>
 
 )
}

export default Input;
