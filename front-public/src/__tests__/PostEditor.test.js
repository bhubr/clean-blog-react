// PostEditor.test.js
import React from 'react'
import PostEditor from '../PostEditor'
import renderer from 'react-test-renderer'

test('Check that output is correct', () => {
  // Create mock function to use as "addPost" prop
  const mockAddPost = jest.fn()

  // Create component
  const component = renderer.create(
    <PostEditor addPost={mockAddPost} />
  )
  // Convert component to a tree of objects
  let tree = component.toJSON()
  // Match against snapshot
  expect(tree).toMatchSnapshot()

  const input = tree.children[0]
  // Pass a fake event to change event handler
  input.props.onChange({
    target: { name: 'title', value: 'a' }
  })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  const textarea = tree.children[2]
  // Pass a fake event to change event handler
  textarea.props.onChange({
    target: { name: 'content', value: 'z' }
  })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  tree.props.onSubmit({
    preventDefault: () => {}
  })
  tree = component.toJSON()
  expect(tree).toMatchSnapshot()

  expect(mockAddPost.mock.calls.length).toBe(1)
  expect(mockAddPost.mock.calls[0][0]).toEqual({
    title: 'a', content: 'z'
  })
})
