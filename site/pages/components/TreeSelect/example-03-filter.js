/**
 * cn - 筛选
 *    -- onFilter 返回函数时，使用这个函数做前端过滤。
 * en - Filter
 *    -- OnFilter is a function to filter data.
 */
import React from 'react'
import { TreeSelect } from 'shineout'

const data = [
  {
    id: '1',
    title: '1',
    children: [
      { id: '1-1', title: '1-1', children: [{ id: '1-1-1', title: '1-1-1' }, { id: '1-1-2', title: '1-1-2' }] },
      { id: '1-2', title: '1-2' },
    ],
  },
  { id: '2', title: '2', children: [{ id: '2-1', title: '2-1' }, { id: '2-2', title: '2-2' }] },
  { id: '3', title: '3', children: [{ id: '3-1', title: '3-1' }] },
  { id: '4', title: '4', children: [{ id: '4-1', title: '4-1' }] },
  { id: '5', title: '5', children: [{ id: '5-1', title: '5-1' }] },
]

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: [],
    }
  }

  handleChange = v => {
    this.setState({
      value: v,
    })
  }

  handleFilter = text => d => d.title.indexOf(text) > -1

  render() {
    return (
      <TreeSelect
        multiple
        onFilter={this.handleFilter}
        value={this.state.value}
        onChange={this.handleChange}
        clearable
        style={{ width: 250 }}
        keygen="id"
        renderItem={node => `node ${node.title}`}
        data={data}
      />
    )
  }
}
