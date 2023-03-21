// Kubernetes 的简单模拟
package main

// Pod：pod 是 kubernetes 中最小的部署单元，一个 pod 中可以包含一个或多个容器，pod 中的容器共享网络和存储空间，pod 中的容器总是被部署在同一个节点上。
type Pod struct {
	Name string
}

// Node：Node 是 kubernetes 中的工作节点，一个节点可以包含一个或多个 pod。
type Node struct {
	Name string
}

// PodList：PodList 是一个 pod 列表，用于存储 pod。
type PodList struct {
	Pods []*Pod
}

// NodeList：NodeList 是一个 node 列表，用于存储 node。
type NodeList struct {
	Nodes []*Node
}

// PodController：PodController 是一个 pod 控制器，用于管理 pod。
type PodController struct {
	PodList *PodList
}

// NodeController：NodeController 是一个 node 控制器，用于管理 node。
type NodeController struct {
	NodeList *NodeList
}

// NewPodController：NewPodController 用于创建一个 pod 控制器。
func NewPodController() *PodController {
	return &PodController{
		PodList: &PodList{
			Pods: []*Pod{},
		},
	}
}

// NewNodeController：NewNodeController 用于创建一个 node 控制器。
func NewNodeController() *NodeController {
	return &NodeController{
		NodeList: &NodeList{
			Nodes: []*Node{},
		},
	}
}

// AddPod：AddPod 用于向 pod 列表中添加一个 pod。
func (p *PodController) AddPod(pod *Pod) {
	p.PodList.Pods = append(p.PodList.Pods, pod)
}

// AddNode：AddNode 用于向 node 列表中添加一个 node。
func (n *NodeController) AddNode(node *Node) {
	n.NodeList.Nodes = append(n.NodeList.Nodes, node)
}

// GetPods：GetPods 用于获取 pod 列表中的所有 pod。
func (p *PodController) GetPods() []*Pod {
	return p.PodList.Pods
}

// GetNodes：GetNodes 用于获取 node 列表中的所有 node。
func (n *NodeController) GetNodes() []*Node {
	return n.NodeList.Nodes
}

func main() {
	// 创建一个 pod 控制器
	podController := NewPodController()
	// 创建一个 node 控制器
	nodeController := NewNodeController()

	// 创建一个 node
	node := &Node{
		Name: "node1",
	}
	// 将 node 添加到 node 列表中
	nodeController.AddNode(node)

	// 创建一个 pod
	pod := &Pod{
		Name: "pod1",
	}
	// 将 pod 添加到 pod 列表中
	podController.AddPod(pod)
}
