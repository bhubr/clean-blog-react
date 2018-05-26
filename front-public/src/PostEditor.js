import React from 'react'

class PostEditor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.addPost(this.state)
    this.setState({
      title: '',
      content: ''
    })
  }
  render () {
    const { title, content } = this.state
    return (
      <form onSubmit={ this.handleSubmit }>
        <input name="title" placeholder="Post title" value={ title } onChange={ this.handleChange } /><br />
        <textarea name="content" placeholder="Post content" value={ content } onChange={ this.handleChange }></textarea><br />
        <button type="submit">Publish</button>
      </form>
    )
  }
}

export default PostEditor
