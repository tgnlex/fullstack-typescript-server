@Entity 
class User {
@PrimaryGeneratedColumn
id: number 
@Column()
username: string 
@Column()
hashed_password: string
@Column()
age: number
}
export default User;