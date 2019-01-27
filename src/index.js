import 'regenerator-runtime/runtime'

import jails    from 'jails-js'
import logger   from 'jails.packages/logger'
import reactor  from 'jails.packages/reactor'

const start = () => {
	jails
		.use( logger() )
		.extends( reactor() )
		.start()
}

// @Bootstrap Pages
import(/* webpackChunkName: 'home' */ './apps/home')
	.then( start )
