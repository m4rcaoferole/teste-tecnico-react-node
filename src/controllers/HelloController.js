class HelloController {
  async index(req, res) {
    return res.json({ hello: 'Faala Devs' });
  }
}

export default new HelloController();
