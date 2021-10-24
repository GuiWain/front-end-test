import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid name and password error', () => {
      const values = { username: 'invalid-username@test.com', password: '' }

      expect(signInValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" is not allowed"`
      )
    })

    it('should be success', () => {
      const values = { username: 'success-name@test.com', password: '12345' }

      expect(signInValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" is not allowed"`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = { username: '', email: '', password: '' }

      expect(signUpValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        username: '"username" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return short name error', () => {
      const values = { name: 'hi', email: '', password: '' }

      expect(signUpValidate(values).name).toMatchInlineSnapshot(
        `"\\"name\\" is not allowed"`
      )
    })

    it('should return invalid email error', () => {
      const values = {
        name: 'name',
        email: 'invalid-email',
        password: ''
      }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        name: 'Name',
        email: 'email@email.com',
        password: '1234',
        confirm_password: '4321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"Confirm password does not match with password"`
      )
    })
  })
})
