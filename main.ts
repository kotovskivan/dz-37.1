console.log('#20. TypeScript homework example file')

// #1
interface PersonInterface {
  name: string
  age: number
  isActive: boolean
}

function createPerson(name: string, age: number, isActive: boolean): PersonInterface {
  return { name, age, isActive }
}

// #2
function LogMethodCalls(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`Виклик методу "${propertyName}" з аргументами: ${args.join(', ')}`)
    return originalMethod.apply(this, args)
  }
  return descriptor
}

class Calculator {
  @LogMethodCalls
  add(a: number, b: number): number {
    return a + b
  }

  @LogMethodCalls
  multiply(a: number, b: number): number {
    return a * b
  }
}

// #3
namespace UserProfile {
  export interface ProfileInterface {
    id: string
    name: string
    email: string
  }

  function generateId(): string {
    return Math.random().toString(36).substring(2, 12)
  }

  export function createProfile(name: string, email: string): ProfileInterface {
    return {
      id: generateId(),
      name,
      email
    }
  }
}

export { createPerson, Calculator, UserProfile }
