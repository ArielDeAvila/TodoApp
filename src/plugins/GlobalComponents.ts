const globalComponents = {
  install(app: any) {
    const components = import.meta.glob('./../components/global/**/*.vue', { eager: true })

    Object.entries(components).forEach(([path, component]: any) => {
      app.component(
        path
          .split('/')
          .pop()
          .replace(/\.\w+$/, ''),
        component.default
      )
    })
  }
}

export default globalComponents
