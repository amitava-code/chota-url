import crypto from 'crypto'

const genetateCode = ()=> {

    let shortCode = (crypto.randomBytes(6).toString('base64url').slice(0,6))

    return shortCode
}
export default genetateCode