interface Project{
    id:number,
    title:string,
    status:boolean
}


class ProjectNode implements Project{
    id;
    title;
    status

    constructor(id,title,status){
        this.id=id,
        this.title=title,
        this.status=status
    }

}

let p1=new ProjectNode(1,"eBay",true)

console.log(p1)