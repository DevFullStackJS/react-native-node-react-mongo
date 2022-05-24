import {useState} from 'react';
import {post, put} from '../../../services/technique/api';

export const useLogin = ({signinUtilisateur, inscriptionUtilisateur}: any) => {
  const [page, setPage] = useState('signin');
  const [email, setEmail] = useState<string>('fullstauser@test.com');
  const [ville, setVille] = useState('');
  const [adresse, setAdresse] = useState('');
  const [nom, setNom] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('123@fullstack');
  const [password1, setPassword1] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgot, setForgot] = useState(false);
  const [showValidation, setShowValidation] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const signin = page === 'signin';

  const toSignin = () => {
    setMessage('');
    setLoading(true);
    if (signin) {
      signinUtilisateur(
        {email, password},
        ({accessToken, refreshToken, utilisateur, message}: any) => {
          console.log({accessToken, refreshToken, utilisateur, message});
          setLoading(false);
          if (accessToken && refreshToken && utilisateur) {
            // navigation.navigate('HomeScreen');
          } else if (message === 'Utilisateur inactif') {
            setShowValidation(true);
          } else if (message) {
            setMessage(message);
          } else {
            setMessage('Email non trouvé dans la base');
          }
        },
      );
    } else {
      inscriptionUtilisateur(
        {email, password, ville, adresse, nom},
        (res: any) => {
          console.log({res});
          setLoading(false);
          setShowValidation(true);
        },
      );
    }
  };

  const resetPassword = async () => {
    setLoading(true);
    setError('');
    if (forgot) {
      // @ts-ignore
      const res = await post('authentification/reset-password', {email});
      setLoading(false);
      console.log({res});
      if (res?.data === true) {
        setError('');
        setError('Un lien a été envoyé dans votre e-mail');
        // navigation.goBack();
      } else {
        setError('E-mail incorrect');
      }
    } else {
      const res = await put('users/to-active', {email, code});
      setLoading(false);
      console.log({res});
      if (res?.data === true) {
        setError('');
        setShowValidation(false);
        setCode('');
        // navigation.goBack();
      } else {
        setError('Le code est incorrect.');
      }
    }
  };

  const sendCode = async () => {
    const res = await put('inscription/code', {email});
    console.log({res});
  };

  return {
    page,
    setPage,
    email,
    setEmail,
    ville,
    setVille,
    adresse,
    setAdresse,
    nom,
    setNom,
    code,
    setCode,
    password,
    setPassword,
    password1,
    setPassword1,
    loading,
    setLoading,
    forgot,
    setForgot,
    showValidation,
    setShowValidation,
    message,
    setMessage,
    error,
    setError,
    toSignin,
    resetPassword,
    sendCode,
  };
};
