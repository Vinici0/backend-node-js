export class CreateUserDto {
  // Esta propiedad debe asignarse con una función asíncrona que reciba un email y retorne un booleano.
  static existsByEmail: (email: string) => Promise<boolean>;

  private constructor(
    public readonly username: string,
    public readonly password: string,
    public readonly email: string,
    public readonly sessionActive: string,
    public readonly identification: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly status?: string,
    public readonly personId?: number
  ) {}

  static async create(
    props: { [key: string]: any }
  ): Promise<[string?, CreateUserDto?]> {
    const {
      username,
      password,
      sessionActive,
      identification,
      firstName,
      lastName,
      status,
      personId
    } = props;

    // Validación de campos obligatorios
    if (!username) return ["username is required", undefined];
    if (!password) return ["password is required", undefined];
    if (!sessionActive) return ["sessionActive is required", undefined];
    if (!identification) return ["identification is required", undefined];
    if (!firstName) return ["firstName is required", undefined];
    if (!lastName) return ["lastName is required", undefined];

    // Validación de username:
    if (!/^[A-Za-z0-9]+$/.test(username))
      return ["username must contain only letters and numbers", undefined];
    if (username.length < 8 || username.length > 20)
      return ["username must be between 8 and 20 characters", undefined];
    if (!/\d/.test(username))
      return ["username must contain at least one number", undefined];
    if (!/[A-Z]/.test(username))
      return ["username must contain at least one uppercase letter", undefined];

    // Validación de password:
    if (password.length < 8)
      return ["password must have at least 8 characters", undefined];
    if (!/[A-Z]/.test(password))
      return ["password must contain at least one uppercase letter", undefined];
    if (/\s/.test(password))
      return ["password must not contain spaces", undefined];
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password))
      return ["password must contain at least one special character", undefined];

    // Validación de identificación: debe ser exactamente 10 dígitos y no tener 4 dígitos iguales consecutivos.
    if (!/^\d{10}$/.test(identification))
      return ["identification must be exactly 10 digits", undefined];
    if (/(\d)\1{3}/.test(identification))
      return ["identification must not have four identical consecutive digits", undefined];

    // Validación de personId (si se proporciona)
    let parsedPersonId: number | undefined;
    if (personId !== undefined) {
      parsedPersonId = Number(personId);
      if (isNaN(parsedPersonId))
        return ["personId must be a valid number", undefined];
    }

    // Generación del email basado en firstName y lastName:
    // Ejemplo: "Juan Alberto" y "Piguave Loor" → "jpiguavel@mail.com"
    const firstInitial = firstName.trim().charAt(0).toLowerCase();
    const lastNames = lastName.trim().split(/\s+/);
    let baseEmail = "";
    if (lastNames.length >= 2) {
      // Toma el primer apellido completo y la primera letra del segundo apellido.
      baseEmail = firstInitial + lastNames[0].toLowerCase() + lastNames[1].charAt(0).toLowerCase();
    } else {
      baseEmail = firstInitial + lastNames[0].toLowerCase();
    }
    let emailCandidate = baseEmail + "@mail.com";
    let counter = 0;

    if (!this.existsByEmail)
      throw new Error("The existsByEmail function must be set in CreateUserDto.");

    // Verificar duplicidad de email y ajustar en caso de duplicado.
    while (await this.existsByEmail(emailCandidate)) {
      counter++;
      emailCandidate = baseEmail + counter + "@mail.com";
    }

    return [
      undefined,
      new CreateUserDto(
        username,
        password,
        emailCandidate,
        sessionActive,
        identification,
        firstName,
        lastName,
        status,
        parsedPersonId
      )
    ];
  }
}
