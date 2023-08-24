export class FileDownloadedHandler {
    private url: string;
    private name: string;

    constructor(filePath: string, name: string) {
        this.url=filePath;
        this.name=name;
    }

    download = (): void => {
        const a = document.createElement('a');
        a.href = this.url;
        a.download = this.name;
        a.target = '_blank';
        a.click();
    }
}