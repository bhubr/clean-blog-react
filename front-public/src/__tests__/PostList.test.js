// PostList.test.js
import React from 'react'
import PostList from '../PostList'
import renderer from 'react-test-renderer'

const posts = [
  { title: 'Test post #1', content: 'Some content' },
  { title: 'Test post #2', content: 'Some more content' }
]

test('Check that output is correct', () => {
  // Render component
  const component = renderer.create(
    <PostList posts={posts} />,
  )
  // Convert component to a tree of objects
  let tree = component.toJSON()
  // Match against snapshot
  expect(tree).toMatchSnapshot()
})
