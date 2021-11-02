import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn, OneToMany, JoinTable } from "typeorm";
import { v4 as uuid } from "uuid";
import{Category} from "../entities/Category"

@Entity("Product")
class Product {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    cost: number;

    @Column()
    type: "varchar";
    lenght: "1";

    


    @OneToMany(() => Category, category => category.producto)
    categorias: Category[];
    @JoinTable()
    categories = Category;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
    
    constructor() {
        if (!this.id) {
            this.id = uuid();

        }
    }
}
export{Product}