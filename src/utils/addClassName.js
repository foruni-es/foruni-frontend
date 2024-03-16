const addClassName = (...classes) => {
    return classes.filter(Boolean).join(' ')
}

export default addClassName;
  