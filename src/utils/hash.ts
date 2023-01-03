import crypto from 'crypto';

interface IVerifyPassword {
  candidatePassword: string,
  salt: string,
  hash: string,
}


export function hashPassword (password : string) {
  
  const salt = crypto.randomBytes(16).toString("hex");

  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString('hex');

  return { hash, salt }
}

export function verifyPassword({ candidatePassword, salt, hash }: IVerifyPassword) {
  const candidateHash = crypto.pbkdf2Sync(
    candidatePassword, 
    salt, 
    1000, 
    64, 
    "sha512"
  ).toString();

  return candidateHash === hash;
}