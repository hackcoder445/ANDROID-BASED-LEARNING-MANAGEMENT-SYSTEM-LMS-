import { Request, Response } from 'express';

export const listCertificates = (_req: Request, res: Response) => {
  res.json({ data: [{ id: 'cert-1', course: 'React Native for Production Apps', credentialId: 'HCA-2026-03-31-8FA3' }] });
};

export const certificateDetail = (req: Request, res: Response) => {
  res.json({
    id: req.params.id,
    student: 'Ada Obi',
    course: 'React Native for Production Apps',
    date: '2026-03-31',
    credentialId: 'HCA-2026-03-31-8FA3',
    verifyUrl: 'https://hackcoderacademy.com/verify/HCA-2026-03-31-8FA3',
  });
};

export const verifyCertificate = (req: Request, res: Response) => {
  res.json({ credentialId: req.params.credentialId, valid: true });
};

export const exportCertificatePdf = (req: Request, res: Response) => {
  res.json({ id: req.params.id, downloadUrl: `https://cdn.hackcoderacademy.com/certificates/${req.params.id}.pdf` });
};
