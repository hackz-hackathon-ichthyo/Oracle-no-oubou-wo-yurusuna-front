// Base64 => Uint8Array
export class Base64Encoder extends TextEncoder {
  constructor() {
    super()
  }

  encode(text: string) {
    return super.encode(atob(text))
  }
}

// Uint8Array => Base64
export class Base64Decoder extends TextDecoder {
  constructor() {
    super()
  }

  decode(buffer: BufferSource) {
    return btoa(super.decode(buffer))
  }
}
