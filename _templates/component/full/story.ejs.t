---
to: <%= path || actionfolder %>/<%= name %>/<%= h.changeCase.camel(name) %>.story.js
---
import * as React from 'react'
import { storiesOf } from '@storybook/react'
import css from 'styled-jsx/css'

import <%= name %> from './<%= name %>'
import notes from './<%= h.changeCase.camel(name) %>.md'

storiesOf('<%= name %>', module)
  .add('<<%= name %> />', () => (
    <div>
      <<%= name %> />
      <style jsx>{styles}</style>
    </div>
  ), { notes: { notes } })

const styles = css``
