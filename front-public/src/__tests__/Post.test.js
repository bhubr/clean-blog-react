// Post.test.js
import React from 'react'
import Post from '../Post'
import renderer from 'react-test-renderer'

test('Check that output is correct', () => {
  // Render component
  const component = renderer.create(
    <Post title="Test post" content="Content for test post" />,
  )
  // Convert component to a tree of objects
  let tree = component.toJSON()
  // Match against snapshot
  expect(tree).toMatchSnapshot()
})
