import PDFMerger from 'pdf-merger-js';

var merger = new PDFMerger();

(async (p1,p2) => {
    await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
    await merger.add('2.pdf', 2); // merge only page 2
    
    await merger.save('3.pdf'); // merge only pages 1

    // // Set metadata
    // await merger.setMetadata({
    //     producer: "pdf-merger-js based script",
    //     author: "John Doe",
    //     creator: "John Doe",
    //     title: "My live as John Doe"
    // });

    // await merger.save('merged.pdf'); //save under given name and reset the internal document

    // // Export the merged PDF as a nodejs Buffer
    // // const mergedPdfBuffer = await merger.saveAsBuffer();
    // // fs.writeSync('merged.pdf', mergedPdfBuffer);
})();