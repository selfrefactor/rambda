//https://github.com/staltz/zii

export function s(){
  if (Object.prototype.s === undefined){
    Object.defineProperty(
      Object.prototype, 's', {
        value : function(f){
          return f(this.valueOf())
        },
        writable     : true,
        configurable : true,
      }
    )

    return true
  }

  return false
}
