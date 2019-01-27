import register from '../../register'
import * as hello from '../../components/hello-world'

const dependencies = {
    injection :{}
}

register('hello-world', hello, dependencies)
