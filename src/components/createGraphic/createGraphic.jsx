// import { useState, useEffect } from "react";
// import Plot from "react-plotly.js";
// import Plotly from "plotly.js-dist-min";
// import { jsPDF } from "jspdf";
// import PropTypes from "prop-types";

// export default function CreateGraphic({ title, yAxis, yTitle }) {
//   const [xAxis, setXAxis] = useState([]);
//   const [dataReady, setDataReady] = useState(false);

//   // Usando useEffect para preencher xAxis e marcar os dados como prontos
//   useEffect(() => {
//     if (title && yAxis.length > 0) {
//       const newXAxis = yAxis.map((_, index) => index + 1);
//       setXAxis(newXAxis);
//       setDataReady(true);
//     }
//   }, [title, yAxis]); // Dependendo de yAxis para atualizações

//   const exportToPDF = () => {
//     if (!dataReady) {
//       alert("Os dados ainda não estão prontos para exportação.");
//       return;
//     }

//     const gd = document.getElementById("myPlot");
//     Plotly.toImage(gd, { format: "png", width: 600, height: 600 }).then(
//       (dataUrl) => {
//         const pdf = new jsPDF({
//           orientation: "landscape",
//         });
//         pdf.addImage(dataUrl, "PNG", 10, 10, 280, 160);
//         pdf.save(`${title}.pdf`);
//       }
//     );
//   };

//   return (
//     <>
//       {title && yAxis.length > 0 && dataReady && (
//         <>
//           <div id="myPlot">
//             <Plot
//               data={[
//                 {
//                   x: xAxis,
//                   y: yAxis,
//                   type: "scatter",
//                   mode: "lines+markers",
//                   marker: { color: "black" },
//                   name: title,
//                   line: { color: "#cb6ce6", width: 2 },
//                 },
//               ]}
//               layout={{
//                 width: 500,
//                 height: 500,
//                 title,
//                 xaxis: { title: "Progressão Temporal" },
//                 yaxis: { title: yTitle },
//               }}
//               config={{ responsive: true }}
//             />
//           </div>
//           <button onClick={exportToPDF}>Exportar Gráfico como PDF</button>
//         </>
//       )}
//     </>
//   );
// }

// CreateGraphic.propTypes = {
//   title: PropTypes.string,
//   yAxis: PropTypes.array,
//   yTitle: PropTypes.string,
// };

// import { useState, useEffect, useRef } from 'react';
// import Plot from 'react-plotly.js';
// import Plotly from 'plotly.js-dist-min';
// import { jsPDF } from 'jspdf';
// import PropTypes from 'prop-types';

// export default function CreateGraphic({ title, yAxis, yTitle }) {
//   const [xAxis, setXAxis] = useState([]);
//   const plotRef = useRef(null);
//   const [isPlotReady, setIsPlotReady] = useState(false);

//   useEffect(() => {
//     if (title && yAxis.length > 0) {
//       const newXAxis = yAxis.map((_, index) => index + 1);
//       setXAxis(newXAxis);
//     }
//   }, [title, yAxis]);

//   const exportToPDF = () => {
//     if (!isPlotReady) {
//       alert('O gráfico ainda não está pronto para exportação.');
//       return;
//     }

//     Plotly.toImage(plotRef.current, { format: 'png', width: 600, height: 600 })
//       .then((dataUrl) => {
//         const pdf = new jsPDF({
//           orientation: 'landscape',
//         });
//         pdf.addImage(dataUrl, 'PNG', 10, 10, 280, 160);
//         pdf.save(`${title}.pdf`);
//       })
//       .catch((error) => {
//         console.error('Erro ao gerar imagem do gráfico:', error);
//       });
//   };

//   return (
//     <>
//       {title && yAxis.length > 0 && (
//         <>
//           <Plot
//             ref={plotRef}
//             data={[
//               {
//                 x: xAxis,
//                 y: yAxis,
//                 type: 'scatter',
//                 mode: 'lines+markers',
//                 marker: { color: 'black' },
//                 name: title,
//                 line: { color: '#cb6ce6', width: 2 },
//               },
//             ]}
//             layout={{
//               width: 500,
//               height: 500,
//               title,
//               xaxis: { title: 'Progressão Temporal' },
//               yaxis: { title: yTitle },
//             }}
//             config={{ responsive: true }}
//             onInitialized={() => setIsPlotReady(true)}
//           />
//           <button onClick={exportToPDF} disabled={!isPlotReady}>
//             Exportar Gráfico como PDF
//           </button>
//         </>
//       )}
//     </>
//   );
// }

// CreateGraphic.propTypes = {
//   title: PropTypes.string,
//   yAxis: PropTypes.arrayOf(PropTypes.number),
//   yTitle: PropTypes.string,
// };

import { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js-dist-min';
import { jsPDF } from 'jspdf';
import PropTypes from 'prop-types';

export default function CreateGraphic({ title, yAxis, yTitle }) {
  const [xAxis, setXAxis] = useState([]);
  const [dataReady, setDataReady] = useState(false);
  const plotDivRef = useRef(null);

  useEffect(() => {
    if (title && yAxis.length > 0) {
      const newXAxis = yAxis.map((_, index) => index + 1);
      setXAxis(newXAxis);
      setDataReady(true); // Indica que os dados estão prontos
    }
  }, [title, yAxis]);

  const exportToPDF = () => {
    if (!dataReady) {
      alert('Os dados ainda não estão prontos para exportação.');
      return;
    }

    // Certifica que estamos usando o elemento correto
    const gd = plotDivRef.current.querySelector('.js-plotly-plot');

    // Aguarda a próxima iteração do loop de eventos para garantir que o DOM esteja atualizado
    setTimeout(() => {
      Plotly.toImage(gd, { format: 'png', width: 700, height: 400 })
        .then((dataUrl) => {
          const pdf = new jsPDF({
            orientation: 'landscape',
          });
          pdf.addImage(dataUrl, 'PNG', 10, 10, 280, 160);
          pdf.save(`${title}.pdf`);
        })
        .catch((error) => {
          console.error('Erro ao gerar imagem do gráfico:', error);
        });
    }, 500); // O atraso aqui pode precisar ser ajustado
  };

  return (
    <>
      {title && yAxis.length > 0 && dataReady && (
        <>
          <div ref={plotDivRef}>
            <Plot
              data={[
                {
                  x: xAxis,
                  y: yAxis,
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: { color: 'black' },
                  name: title,
                  line: { color: '#cb6ce6', width: 2 },
                },
              ]}
              layout={{
                width: 500,
                height: 500,
                title,
                xaxis: { title: 'Progressão Temporal' },
                yaxis: { title: yTitle },
              }}
              config={{ responsive: true }}
            />
          </div>
          <button onClick={exportToPDF} disabled={!dataReady}>
            Exportar Gráfico como PDF
          </button>
        </>
      )}
    </>
  );
}

CreateGraphic.propTypes = {
  title: PropTypes.string,
  yAxis: PropTypes.arrayOf(PropTypes.number),
  yTitle: PropTypes.string,
};
