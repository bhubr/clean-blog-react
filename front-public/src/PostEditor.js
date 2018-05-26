import React from 'react'

class PostEditor extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.dir(event.target)
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render () {
    const { title, content } = this.state
    return (
      <div>
        <input name="title" placeholder="Post title" value={ title } onChange={ this.handleChange } /><br />
        <textarea name="content" placeholder="Post content" value={ content } onChange={ this.handleChange }></textarea>
      </div>
    )
  }
}

export default PostEditor
