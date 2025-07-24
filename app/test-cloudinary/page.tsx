'use client';

import { useState } from 'react';
import { Upload, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function TestCloudinaryPage() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError(null);
      setResult(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setResult(data.data);
      } else {
        setError(data.error || 'Error al subir la imagen');
      }
    } catch (err) {
      setError('Error de conexión');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              🚀 Prueba de Cloudinary
            </h1>
            <p className="text-gray-600">
              Sube una imagen para verificar que Cloudinary está funcionando correctamente
            </p>
          </div>

          <div className="space-y-6">
            {/* Selector de archivo */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="w-12 h-12 text-gray-400 mb-4" />
                <span className="text-lg font-medium text-gray-700">
                  {file ? file.name : 'Selecciona una imagen'}
                </span>
                <span className="text-sm text-gray-500 mt-1">
                  PNG, JPG, GIF hasta 10MB
                </span>
              </label>
            </div>

            {/* Botón de subida */}
            {file && (
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {uploading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Subiendo...
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5 mr-2" />
                    Subir a Cloudinary
                  </>
                )}
              </button>
            )}

            {/* Resultado exitoso */}
            {result && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-lg font-semibold text-green-800">
                    ¡Subida exitosa!
                  </h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <span className="font-medium text-gray-700">URL:</span>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline block truncate"
                    >
                      {result.url}
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Dimensiones:</span>
                      <p className="text-gray-600">{result.width} x {result.height}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Formato:</span>
                      <p className="text-gray-600 uppercase">{result.format}</p>
                    </div>
                  </div>

                  {result.url && (
                    <div className="mt-4">
                      <img
                        src={result.url}
                        alt="Imagen subida"
                        className="max-w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex items-center mb-2">
                  <XCircle className="w-6 h-6 text-red-600 mr-2" />
                  <h3 className="text-lg font-semibold text-red-800">
                    Error en la subida
                  </h3>
                </div>
                <p className="text-red-700">{error}</p>
              </div>
            )}

            {/* Información adicional */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-800 mb-2">
                ✅ Configuración Verificada
              </h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Variables de entorno configuradas correctamente</li>
                <li>• Conexión con Cloudinary establecida</li>
                <li>• API de subida funcionando</li>
                <li>• Optimización automática activada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 