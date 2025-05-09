import { Slug } from './slug'

it('should be able to create a new slug from text', () => {
  const slug = Slug.createFromText('Example question ti$tle')

  expect(slug.value).toEqual('example-question-title')
})
